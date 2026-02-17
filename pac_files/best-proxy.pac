function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.49:20274",
        "SOCKS 123.54.197.20:22195",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 123.54.197.49:22489",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 123.54.197.21:20040",
        "SOCKS 13.229.107.106:80",
        "SOCKS 123.54.197.49:21214",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 123.54.197.50:23542",
        "SOCKS 5.129.216.47:1081",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 123.54.197.50:22599",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 202.154.18.80:8082",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 51.158.68.68:8811",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}