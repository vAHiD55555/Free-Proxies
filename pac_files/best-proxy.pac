function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.252.135:8080",
        "SOCKS 103.195.65.254:80",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 115.127.178.206:2589",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 36.255.98.151:7421",
        "SOCKS 36.255.98.169:9098",
        "SOCKS 36.255.98.175:8004",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 110.235.255.245:1080",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 146.235.19.84:10810",
        "SOCKS 165.232.188.102:9090",
        "SOCKS 150.136.153.231:80",
        "SOCKS 36.255.98.184:10019",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}