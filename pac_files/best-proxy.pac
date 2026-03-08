function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.98:5566",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 46.183.25.8:443",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 173.249.5.133:1080",
        "SOCKS 206.123.156.177:6623",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 206.123.156.204:5757",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 193.233.254.61:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 194.87.250.190:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 103.179.218.7:8080",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 71.168.71.12:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}