$(document).ready(function() {


    // References
    var sendBtn = $('button');
    var chat = $('.Chat');
    var input = $('input');

    // Handlebars
    var source = $('#message-template').html();
    var template = Handlebars.compile(source);

    sendBtn.click(function() {
        
        // Generate new message
        var msgText = input.val().trim();

        var message = {
            text: msgText,
            time: '16:00',
            send: 'Template-message--sent'
        }

        var html = template(message);
        
        // Append new message
        chat.append(html);

        // Reset input
        input.val('');

        // Auto reply
        setTimeout(function(){
            
            var message = {
                text: msgText,
                time: '16:01',
                send: 'Template-message--received'
            }
            
            var html = template(message);
            chat.append(html);
            input.val('');

        }, 1000);
    });


}); // <-- End ready
