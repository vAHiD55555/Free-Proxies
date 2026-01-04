function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.106.226:1088",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 8.218.56.130:1122",
        "SOCKS 43.133.2.141:6006",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 120.77.203.0:443",
        "SOCKS 203.189.154.200:1080",
        "SOCKS 23.249.27.167:10808",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 176.100.1.170:3128",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 200.201.134.184:8787",
        "SOCKS 62.60.131.186:4623",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 46.146.204.175:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 43.167.185.71:6006",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 36.255.98.163:4522",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}