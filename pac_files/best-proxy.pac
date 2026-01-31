function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:46249",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 62.60.131.204:11829",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 212.53.228.113:80",
        "SOCKS 36.255.98.168:4185",
        "SOCKS 62.60.131.203:4024",
        "SOCKS 36.255.98.154:4403",
        "SOCKS 36.255.98.160:8303",
        "SOCKS 36.255.98.184:4667",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 36.255.98.163:4439",
        "SOCKS 103.54.57.117:50460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}