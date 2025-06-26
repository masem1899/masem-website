



export const config = {
    schedule: '0 * * * *', // Every hour
}


export default async function() {
    console.log("onSchedule");

    try {
        const bingRes = await fetch('https://api.indexnow.org/IndexNow', {
            method: "POST",
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify({
                host:"https://masem.at",
                key:'ea8b3151b6094ffe88a2012bce6e9b28',
                keyLocation: "https://masem.at/ea8b3151b6094ffe88a2012bce6e9b28.txt",
                urlList: [
                    'https://masem.at',
                    'https://masem.at/projects/pyseoa',
                    'https://masem.at/projects/pyseoa-ts',
                ]
            }),
        });

        console.log("Bing response status:", bingRes.status);
        const responseText = await bingRes.text();
        console.log("Bing response:", responseText)
    } catch(err) {
        console.error('error calling bing newIndex:', err);
    }
}

/*
POST /IndexNow HTTP/1.1
Content-Type: application/json; charset=utf-8
Host: api.indexnow.org
{
  "host": "www.example.org",
  "key": "ea8b3151b6094ffe88a2012bce6e9b28",
  "keyLocation": "https://www.example.org/ea8b3151b6094ffe88a2012bce6e9b28.txt",
  "urlList": [
      "https://www.example.org/url1",
      "https://www.example.org/folder/url2",
      "https://www.example.org/url3"
      ]
}
*/