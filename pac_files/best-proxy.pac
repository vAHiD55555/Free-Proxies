function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.203.37:18080",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 172.172.209.40:3128",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 72.10.160.174:10301",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 71.168.71.12:8890",
        "SOCKS 193.239.86.248:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}