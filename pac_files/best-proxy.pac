function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.204:5882",
        "SOCKS 36.255.98.163:5217",
        "SOCKS 36.255.98.167:4863",
        "SOCKS 74.103.66.15:80",
        "SOCKS 3.112.125.130:3128",
        "SOCKS 62.60.131.203:6261",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 110.44.115.83:8080",
        "SOCKS 62.60.131.253:16343",
        "SOCKS 62.60.131.205:4036",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 67.43.236.20:31241",
        "SOCKS 62.60.131.203:4359",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 62.60.131.253:5489",
        "SOCKS 78.12.220.164:117",
        "SOCKS 35.180.188.216:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}