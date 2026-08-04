function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.114.60.142:1080",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 47.76.171.214:3128",
        "SOCKS 119.148.7.10:22122",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 89.169.37.254:1080",
        "SOCKS 193.181.35.234:8118",
        "SOCKS 47.82.119.233:1011",
        "SOCKS 47.82.108.195:1011",
        "SOCKS 103.138.145.202:1999",
        "SOCKS 144.22.165.206:1088",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 43.161.253.113:1080",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 103.142.255.33:69",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 5.189.159.180:80",
        "SOCKS 199.247.18.115:9050",
        "SOCKS 45.76.182.157:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}