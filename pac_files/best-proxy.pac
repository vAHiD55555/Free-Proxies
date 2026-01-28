function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 179.96.28.58:80",
        "SOCKS 193.221.203.121:1080",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 103.187.86.14:8085",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 62.60.131.205:4369",
        "SOCKS 45.166.93.113:999",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 36.255.98.178:30296",
        "SOCKS 36.255.98.169:4135",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 36.255.98.160:5722",
        "SOCKS 47.245.117.43:80",
        "SOCKS 62.60.131.205:5204",
        "SOCKS 62.60.131.204:4704",
        "SOCKS 36.255.98.163:4249",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}