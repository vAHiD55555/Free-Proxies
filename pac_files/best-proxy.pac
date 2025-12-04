function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.222.241.8:42378",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 72.223.188.67:4145",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 51.195.201.48:9095",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 128.140.76.145:13870",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 37.237.225.218:8081",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 37.187.109.70:10111",
        "SOCKS 47.238.37.111:1100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}