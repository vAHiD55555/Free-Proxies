function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.49.22.23:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 35.180.188.216:80",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 125.141.133.98:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}