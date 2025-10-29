function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.18:17781",
        "SOCKS 35.221.83.64:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 202.65.127.194:1080",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 202.74.243.130:1080",
        "SOCKS 202.130.218.193:1080",
        "SOCKS 152.53.36.101:29499",
        "SOCKS 103.245.96.124:6969",
        "SOCKS 51.15.240.207:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}