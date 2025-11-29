function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.175.31.222:4145",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 152.53.36.101:13873",
        "SOCKS 202.58.77.194:8031",
        "SOCKS 37.187.29.43:37666",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 54.193.94.249:8445",
        "SOCKS 152.53.36.101:40959",
        "SOCKS 152.53.36.101:42449",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 152.53.36.101:15341",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 94.23.222.122:34392",
        "SOCKS 152.53.36.101:40263",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}