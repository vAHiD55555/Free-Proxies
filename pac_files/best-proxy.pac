function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.64.122.99:7302",
        "SOCKS 38.211.24.18:8080",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 47.250.49.217:33333",
        "SOCKS 212.119.236.86:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 47.245.83.61:1011",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 176.108.146.179:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 47.79.94.72:1122",
        "SOCKS 209.141.58.213:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}