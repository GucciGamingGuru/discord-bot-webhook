module.exports = {
    hookId: '280151990535979021',
    hookToken: 'wamhJ3Mh4Zek5J_44gEyo9IEmKvRCdZBxqMad0VMld-Qdooyy-nNk9Mq-lD603JoipWw',
    userName:'Spidey Bot',
    avatarUrl:'',
    sendMessage:  function(msg) {
        var querystring = require('querystring');
        var https = require('https');

        data = {
            'content':msg,
            'username':this.userName,
            'avatar_url':this.avatarUrl
        };

        postBody = querystring.stringify(data);

        options = {
            hostname: 'canary.discordapp.com',
            port: 443,
            path: '/api/webhooks/'+this.hookId+'/'+this.hookToken,
            method: 'POST',
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postBody.length
            }
        };

        var postreq = https.request(options);

        postreq.write(postBody);
        postreq.end();
    }
};
