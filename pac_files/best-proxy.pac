function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.202.103.223:29210",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 38.54.9.151:1234",
        "SOCKS 37.192.133.82:1080",
        "SOCKS 8.213.215.187:3128",
        "SOCKS 5.75.168.247:8020",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 82.223.165.28:62284",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}