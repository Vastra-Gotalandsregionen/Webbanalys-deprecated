 /*
 
 Purpose & Installation
 ======================
 
 "tycktill" is popup form designed for user feedback, the form is configurable
 as well as how the feedback should be received. This file is the javascript 
 that opens a dialog and populates it with a form. It's designed to be used
 cross-domain.
 
 This file is a jQuery plugin, and has the following dependencies:

    * jQuery
    * jQuery UI (Dialog is enough)
    * jQuery UI CSS
    * style/dialog.css
 
 For convenience I recommend using tycktill-loader.js, which loads all of this
 including this file. See the file tycktill-loader.js for details. But you can
 also manually include all above files.
 
 Basic Usage
 ===========
 
 At document ready tycktill plugin looks for all elements having the class 
 'tycktill' and adds a click event listener for them. It will also look at the 
 elements attribute to figure out which form/url should be used for the iframe/ajax
 request. It's often a good idea to have a link with an href to the same form so 
 that it even works with javascript off. Ex:
 
 <a href="/path/to/iframe/form" class="tycktill">Tyck till!</a>
 
 
 Configuration
 =============
 
 There are two ways to configure the dialog(s):
    
    #1 Global options defined in a variable called 'tycktill_options'. Make sure
       it's defined *before* this file is loaded (or at least before the ready
       event)
    #2 Attribute configuration defined in attributes on the target element(s)
 
 Global configuration
 --------------------
 
 An example with the default values (defaults are defined below). Note: all off
 these options will be passed as to the jQuery Dialog, see jQuery document for 
 available attributes.
 
<script type="text/javascript" language="javascript" charset="utf-8"> 

    var tycktill_options = {
       type: 'iframe',             // 'iframe' or 'ajax' 
       width: 610,                 // dialog size
       height: 625,     
       title: 'Tyck till',         // default title if none other is specified
       modal: true,                // block background
       resizable: true,            // if dialog is resizable
       autoOpen: false,            // don't change this
       show: 'slide',              // animation on show dialog
       hide: { effect: 'fade', duration: 1500 }    //animation for hiding dialog
       default_url:  'http://localhost:9090/tyck-till/tycktill/KontaktaOss?formName={form}',
       trigger_sel: '.tycktill'  // which class we should look for
    };
</script> 
 
 
 
 Attribute configuration
 -----------------------
 
 Certain parts of the dialog can be configured through attributes on the element
 (i.e. the link/button) 
 
 The attributes that have configuration meaning are:
 
    * href       (if applicable for the element)
    * title      Sets the dialogs title
    * data-url   Sets the URL of the iframe/ajax request, may optionally contain
      a {form} part used in conjunction with data-form. data-url trumps href
    * data-form  Sets the {form} part of the url
 
 Examples:
    
    <!-- ordinary link, url of iframe taken from href -->
    <a id="goToPage" class="tycktill" title="Kontakta oss" href="http://140.166.207.115:9090/tyck-till/tycktill/KontaktaOss?formName=default">Kontakta oss!</a>
    
    <!-- button, using data-form and data-url -->
    <button  class="tycktill" title="Kontakta oss, knapp" 
             data-form="default"
             data-url="http://140.166.207.115:9090/tyck-till/tycktill/KontaktaOss?formName={form}"
             href="http://www.youtube.com/watch?v=dQw4w9WgXcQ&ob=av2e">Kontakta oss!</button> 
    
    <!-- button just using data-url -->
    <button  class="tycktill" title="Kontakta oss, knapp" 
             data-url="http://140.166.207.115:9090/tyck-till/tycktill/KontaktaOss?formName=default"
             href="http://www.youtube.com/watch?v=dQw4w9WgXcQ&ob=av2e">Kontakta oss!</button> 
 
 
 
 */
(function($){

var default_options = {
   type: 'iframe', //'iframe' or 'ajax' 
   width: 610,
   height: 625,
   title: 'Tyck till',
   modal: true,
   resizable: true, 
   autoOpen: false,
   show: 'slide',
   default_url:  'http://localhost:9090/tyck-till/tycktill/KontaktaOss?formName={form}',
   trigger_sel: '.tycktill',
   hide: { effect: 'fade', duration: 1500 }
};




$.fn.tycktill = function (options) {
    options = $.extend(default_options,options);
        
    //do this for each link/button/etc
    this.each(function(){    
        var $this = $(this);

        //init dialog
        //create html for dialog 
        var $dialog = $('<div></div>').dialog(options);

        //does it have title for us?
        if ($this.attr('title')) {
            options.title = $this.attr('title');
        } 

        //click event
        $this.click(function(e){
            e.preventDefault();
            
            //iframe exists if this is the second time
            if ($dialog.find('iframe').size() == 0) {        
                //href overides url of iframe or has the ajax url
                var url;
                if ($this.attr('data-form')) {
                    //any html element with data-form attribute and possibly data-url
                    url = ($this.attr('data-url')?$this.attr('data-url'):options.default_url).replace('{form}',$this.attr('data-form'));
                } else if ($this.attr('data-url')) {
                    //any html element with just a data url
                    url = $this.attr('data-url');
                } else if ($this.attr('href')) {
                    //link with href
                    url = $this.attr('href');
                }  else {
                    //default form on any element
                    options.default_url.replace('{form}','default');
                }

                if (options.type === 'ajax') {
                        //do ajax loading
                        $dialog.load(url);
                } else {
                    //iframe src setting
                    var iframe = '<iframe src="'+url+'" frameborder="0" name="tycktill" width="100%" height="100%"></iframe>';
                    $dialog.append(iframe);  
                }
            }          
            
            $dialog.dialog("open"); 
            return false;
        });
    });
    return this;
}



//find all links/elements to trigger on
$(document).ready(function(){
    //you can overide options with an object defined before load
    if (typeof tycktill_options === 'object') {
        $( $.extend(tycktill_options,default_options).trigger_sel ).tycktill(tycktill_options);
    } else {
        $(default_options.trigger_sel).tycktill();
    }
});


})(jQuery);
