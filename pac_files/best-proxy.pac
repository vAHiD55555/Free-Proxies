function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.151.88.220:6618",
        "SOCKS 203.189.152.142:1080",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 62.60.131.193:7791",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 203.189.154.200:1080",
        "SOCKS 202.62.59.218:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 62.60.131.189:8081",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 213.76.184.53:3128",
        "SOCKS 62.60.131.183:45405",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 62.60.131.183:4916",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 89.46.249.253:53018",
        "SOCKS 103.163.244.106:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}