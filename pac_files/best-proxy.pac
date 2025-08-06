function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.82.22.235:34587",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 103.145.34.10:55443",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 31.128.41.253:18080",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 185.93.89.145:4325",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 223.135.156.183:8080",
        "SOCKS 212.110.188.222:34411",
        "SOCKS 103.93.93.66:8080",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 43.224.8.116:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}