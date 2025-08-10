function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.162.13.26:6868",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 46.62.143.200:8060",
        "SOCKS 50.112.100.138:80",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 58.186.92.227:16000",
        "SOCKS 147.75.34.105:443",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 110.74.195.34:25",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 77.238.103.98:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}