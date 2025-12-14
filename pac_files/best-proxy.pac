function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.249.205.117:8888",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 35.173.76.39:8080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 128.140.76.145:31698",
        "SOCKS 157.10.53.91:60001",
        "SOCKS 47.236.53.35:1145",
        "SOCKS 212.83.138.172:64852",
        "SOCKS 47.82.117.31:1011",
        "SOCKS 72.10.160.171:12079",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 68.183.180.48:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}