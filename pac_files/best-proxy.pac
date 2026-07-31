function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.222.237.40:1080",
        "SOCKS 43.161.253.113:1080",
        "SOCKS 43.155.185.73:1080",
        "SOCKS 172.171.83.26:8080",
        "SOCKS 23.184.200.67:1080",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 185.105.184.45:1110",
        "SOCKS 116.203.181.56:9050",
        "SOCKS 104.161.23.122:5089",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 122.117.35.224:1080",
        "SOCKS 103.66.46.150:69",
        "SOCKS 104.171.133.81:1080",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 147.45.169.78:49153",
        "SOCKS 95.105.28.76:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 103.165.128.75:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}