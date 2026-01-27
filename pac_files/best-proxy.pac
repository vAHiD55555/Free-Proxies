function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.161:5703",
        "SOCKS 62.60.131.205:4369",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 43.216.250.248:23218",
        "SOCKS 36.255.98.153:12029",
        "SOCKS 36.255.98.151:13126",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 31.56.78.170:8181",
        "SOCKS 62.60.131.204:8131",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 36.255.98.169:4606",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 62.60.131.204:6040",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 62.60.131.204:5498",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 36.255.98.165:4925",
        "SOCKS 47.239.61.82:9001",
        "SOCKS 62.60.131.205:6139",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}