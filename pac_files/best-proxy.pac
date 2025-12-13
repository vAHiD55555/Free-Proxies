function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.159.65:80",
        "SOCKS 103.86.131.62:80",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 202.148.15.74:8080",
        "SOCKS 128.140.76.145:16052",
        "SOCKS 138.59.11.192:999",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 202.40.179.186:64564",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 80.82.55.71:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}