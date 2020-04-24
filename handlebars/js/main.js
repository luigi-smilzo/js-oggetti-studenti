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
                text: 'Okey-dokey!',
                time: '16:01',
                send: 'Template-message--received'
            }
            
            var html = template(message);
            chat.append(html);

        }, 1000);
    });

    // Stored messages
    var storedMsg = [
        {
            text: 'A che ora ci vediamo?',
            time: '16:01',
            send: 'Template-message--received' 
        },
        {
            text: 'Facciamo alle 16 e 30?',
            time: '16:02',
            send: 'Template-message--sent' 
        },
        {
            text: 'Ok, a dopo',
            time: '16:03',
            send: 'Template-message--received' 
        }
    ];
    
    for (var i = 0; i < storedMsg.length; i++) {
        var html = template(storedMsg[i])
        chat.append(html);
    }

}); // <-- End ready
