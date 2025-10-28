function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.129.147.102:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 222.59.173.105:45192",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 172.99.189.39:15604",
        "SOCKS 117.74.65.207:80",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 149.202.94.235:9065",
        "SOCKS 5.183.70.46:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 123.182.233.70:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}