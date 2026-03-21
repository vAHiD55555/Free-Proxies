function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.34.179.98:8453",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 45.136.131.54:8448",
        "SOCKS 38.34.179.54:8446",
        "SOCKS 24.144.118.25:20598",
        "SOCKS 38.34.178.245:8446",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 45.136.131.44:8448",
        "SOCKS 38.145.208.190:8443",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 38.145.208.195:8443",
        "SOCKS 38.145.218.227:8443",
        "SOCKS 38.145.220.36:8443",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 206.123.156.189:5721",
        "SOCKS 38.34.179.69:8443",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 198.211.100.143:20341",
        "SOCKS 223.113.89.138:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}