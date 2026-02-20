function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 147.75.34.105:443",
        "SOCKS 123.54.197.21:20168",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 80.76.34.133:8080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 190.242.157.215:8080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 5.189.254.62:1080",
        "SOCKS 202.152.44.18:8081",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 85.214.244.174:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}