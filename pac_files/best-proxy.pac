function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.108.83.137:1080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 110.235.246.243:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 8.222.254.11:33333",
        "SOCKS 154.38.180.176:443",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 163.172.131.178:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}