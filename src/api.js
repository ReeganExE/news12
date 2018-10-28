const host = atob('YXBpLm5ld3MuemluZy52bi9hcGkvbW9iaWxl');

export default (topic, page) => fetch(`https://${host}/${topic}.json?p=${page}&c=50`).then(a => a.json());
