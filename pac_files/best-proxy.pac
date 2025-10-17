function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.215.46.91:20087",
        "SOCKS 45.186.248.120:3128",
        "SOCKS 185.93.89.187:39099",
        "SOCKS 185.93.89.163:8728",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 185.93.89.144:9772",
        "SOCKS 185.93.89.182:8168",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 89.58.45.94:46224",
        "SOCKS 89.58.45.94:44718",
        "SOCKS 185.93.89.183:4056",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 140.237.14.92:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}