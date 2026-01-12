function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.150.126:1080",
        "SOCKS 5.199.166.236:9100",
        "SOCKS 43.135.133.23:59394",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 178.208.88.97:3128",
        "SOCKS 115.127.179.162:2589",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 72.10.160.171:32063",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 15.160.134.84:238",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 51.15.196.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}