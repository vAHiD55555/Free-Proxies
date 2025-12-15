function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.36.190:1088",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 115.127.178.54:2026",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 88.215.162.59:1080",
        "SOCKS 67.43.236.18:25943",
        "SOCKS 67.43.228.252:2357",
        "SOCKS 147.75.34.105:443",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 196.204.83.237:1976",
        "SOCKS 202.65.127.194:1080",
        "SOCKS 115.127.179.42:2026",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 181.214.39.73:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}