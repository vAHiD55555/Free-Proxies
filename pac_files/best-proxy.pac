function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.76.159.121:8080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 103.180.123.107:82",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 91.203.179.72:65056",
        "SOCKS 103.99.136.66:8080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 8.140.235.207:9001",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 124.83.110.164:8082",
        "SOCKS 147.75.66.235:443",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 212.124.22.245:1080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 218.64.122.99:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}