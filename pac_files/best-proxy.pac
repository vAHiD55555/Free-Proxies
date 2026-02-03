function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:26747",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 152.53.171.242:10006",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 152.53.171.242:10282",
        "SOCKS 120.28.194.248:8282",
        "SOCKS 62.60.131.181:4005",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 8.217.3.240:8388",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 152.53.171.242:55533",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}