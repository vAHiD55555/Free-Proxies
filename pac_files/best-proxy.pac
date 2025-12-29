function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 195.200.26.27:5555",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 110.235.246.228:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 8.220.140.243:8080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 8.148.23.165:1234",
        "SOCKS 115.127.181.122:2026",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 3.85.42.63:3128",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 35.182.97.107:80",
        "SOCKS 70.166.65.160:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}