function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.147.137.234:9108",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 64.188.73.45:443",
        "SOCKS 36.255.98.151:4991",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 116.105.17.2:9178",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 37.120.162.180:12447",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 163.47.37.190:1080",
        "SOCKS 36.255.98.151:6238",
        "SOCKS 36.255.98.160:11310",
        "SOCKS 36.255.98.164:4432",
        "SOCKS 37.120.162.180:11840",
        "SOCKS 62.60.131.183:28033",
        "SOCKS 36.255.98.153:4878",
        "SOCKS 125.141.139.112:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}