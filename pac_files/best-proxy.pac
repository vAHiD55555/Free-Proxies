function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.90:15335",
        "SOCKS 34.56.128.52:80",
        "SOCKS 124.248.190.48:1080",
        "SOCKS 163.5.128.252:14270",
        "SOCKS 94.184.25.60:242",
        "SOCKS 84.21.172.174:1080",
        "SOCKS 36.255.98.167:4710",
        "SOCKS 103.195.100.154:10080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 203.189.137.214:1080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 45.115.112.142:11011",
        "SOCKS 20.78.213.56:80",
        "SOCKS 120.77.203.0:443",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 62.60.131.185:5264",
        "SOCKS 213.35.110.67:10810",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}