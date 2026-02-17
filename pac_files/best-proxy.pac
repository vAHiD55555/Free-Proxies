function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.49:5566",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 16.79.112.218:6666",
        "SOCKS 5.129.237.45:49488",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 90.84.188.97:8000",
        "SOCKS 67.43.228.250:9209",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 72.10.160.173:30021",
        "SOCKS 5.57.38.64:27913",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 202.21.115.178:8080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 193.47.60.119:52681",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}