function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.109.57.42:3629",
        "SOCKS 15.168.12.20:3128",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 222.59.173.105:44037",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 116.98.187.95:1014",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 135.181.213.184:40027",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 77.110.114.116:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}