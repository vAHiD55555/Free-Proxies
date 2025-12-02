function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 39.170.85.129:7302",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 152.53.36.101:49425",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 120.77.203.0:443",
        "SOCKS 104.233.246.126:1099",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 171.238.88.218:1092",
        "SOCKS 152.53.36.101:11415",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 152.53.36.101:50675",
        "SOCKS 152.53.36.101:16568",
        "SOCKS 202.58.77.76:7777",
        "SOCKS 98.185.94.76:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}