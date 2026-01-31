function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.205:4859",
        "SOCKS 62.60.131.204:4257",
        "SOCKS 36.255.98.167:4144",
        "SOCKS 196.74.236.0:3128",
        "SOCKS 62.60.131.253:5355",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 36.255.98.167:10805",
        "SOCKS 62.60.131.205:4852",
        "SOCKS 62.60.131.179:10608",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 36.255.98.151:6338",
        "SOCKS 47.239.61.82:9001",
        "SOCKS 62.60.131.205:4091",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 172.236.162.80:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 62.60.131.203:4180",
        "SOCKS 91.121.88.53:8010",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}