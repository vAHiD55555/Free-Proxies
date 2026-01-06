function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.58.77.194:8031",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 18.141.177.23:80",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 62.60.131.179:13978",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 130.110.250.13:1111",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 203.25.208.163:1100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}