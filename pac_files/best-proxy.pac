function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 164.90.151.28:3128",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 152.53.171.242:49217",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 152.53.171.242:54731",
        "SOCKS 18.179.49.76:3128",
        "SOCKS 152.53.171.242:10025",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 151.241.227.80:1080",
        "SOCKS 35.77.72.200:3128",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 43.207.44.234:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}