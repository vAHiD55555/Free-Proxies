function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.6.105.152:4216",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 42.193.101.38:1080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 103.190.120.98:30027",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 135.181.203.208:80",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 27.79.213.13:16000",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 27.72.100.236:4996",
        "SOCKS 27.79.222.84:16000",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 47.245.117.43:80",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 117.68.147.8:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}