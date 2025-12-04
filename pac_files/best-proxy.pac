function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.238.88.218:1057",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 159.65.81.12:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 13.229.107.106:80",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 171.238.88.27:1054",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 46.146.204.175:1080",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 123.182.233.70:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}