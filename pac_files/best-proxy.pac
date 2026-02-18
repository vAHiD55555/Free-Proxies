function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 94.176.3.43:7443",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 193.124.190.224:53294",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 67.43.236.21:3811",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 113.59.32.163:22222",
        "SOCKS 5.57.38.64:27913",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 185.61.38.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}