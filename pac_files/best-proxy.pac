function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.179:4303",
        "SOCKS 185.93.89.180:4881",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 103.17.246.60:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 67.43.236.21:8561",
        "SOCKS 185.93.89.181:12000",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 185.93.89.182:9999",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 82.200.235.134:19170",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 89.58.45.94:10581",
        "SOCKS 185.93.89.163:6478",
        "SOCKS 89.58.45.94:32241",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}