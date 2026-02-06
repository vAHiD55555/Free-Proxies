function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.77.102.18:3128",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 178.62.116.7:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 14.143.222.113:10168",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 152.53.171.242:17463",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 152.53.171.242:11406",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 152.53.171.242:12905",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 152.53.171.242:18943",
        "SOCKS 157.66.16.48:8181",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 146.235.19.84:10855",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}