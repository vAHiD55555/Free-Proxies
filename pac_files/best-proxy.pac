function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 83.219.250.8:62920",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 152.53.171.242:20135",
        "SOCKS 14.143.222.113:10168",
        "SOCKS 172.105.65.41:1080",
        "SOCKS 2.144.6.212:12111",
        "SOCKS 152.53.171.242:10827",
        "SOCKS 185.233.202.217:5858",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 209.38.222.145:8080",
        "SOCKS 77.221.141.244:21406",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 125.129.69.79:3128",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 178.22.31.205:1082",
        "SOCKS 20.210.76.175:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}