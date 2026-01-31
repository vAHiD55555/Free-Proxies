function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.75.126.150:57328",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 221.163.14.232:10080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 62.60.131.204:5394",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 62.60.131.203:6261",
        "SOCKS 36.255.98.182:10030",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 62.60.131.204:4642",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 109.94.164.200:80",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 36.255.98.153:16464",
        "SOCKS 36.255.98.160:12126",
        "SOCKS 119.84.215.127:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}